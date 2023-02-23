package ru.geekbrains;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


// STUDY BY VIDEO:   https://youtu.be/e_IulWT1gDE

public class Main {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(8080)){
            System.out.println("Server is working");

            while (true) {
                Socket socket = serverSocket.accept();
                System.out.println("New Client connected!");

                try (
                        BufferedReader inputReader = new BufferedReader(
                                new InputStreamReader(
                                        socket.getInputStream(),
                                        StandardCharsets.UTF_8
                                )
                    );

                        PrintWriter outputStream = new PrintWriter(socket.getOutputStream());
                        ){

                    while (!inputReader.ready());

                    String firstLine = inputReader.readLine();
                    String[] parts = firstLine.split(" ");
                    if (parts[1].equals("/")) {
                        parts[1] = "index.html";
                    }
                    System.out.println(firstLine);
                    while (inputReader.ready()) {
                        System.out.println(inputReader.readLine());
                    }

                    System.out.println("parts[1] : " + parts[1]);
                    Path path = Paths.get("src\\www", parts[1]);

                    System.out.println("path -----→ : " +  path);
                    // Error when no file
                    if (!Files.exists(path)) {
                        outputStream.println("HTTP/1.1 404 NOT_FOUND");
                        outputStream.println("Content-Type: text/html; charset=utf-8");
                        outputStream.println();
                        outputStream.println("<h1 style='text-align:center;color:red'>FILE NOT FOUND!</h1>");
                        outputStream.flush();
                        continue;
                    }

                    outputStream.println("HTTP/1.1 200 OK");
                    outputStream.println("Content-Type: text/html; charset=utf-8");
                    outputStream.println(); // empty string means BODY is starting

                    Files.newBufferedReader(path).transferTo(outputStream);
                    outputStream.flush();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
