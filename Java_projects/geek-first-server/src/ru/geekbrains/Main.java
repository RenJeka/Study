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

enum StatusCodes {
    OK,
    NOT_FOUND
}

public class Main {

    private static final String PATH_TO_FILES_FROM_SERVER = "src\\www";
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(8080)){
//            System.out.println("Server is working");

            while (true) {
                Socket socket = serverSocket.accept();
//                System.out.println("New Client connected!");

                // extract new thread  for main stream
                new Thread(() -> handleRequest(socket)).start();
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void handleRequest(Socket socket) {
        try (
                BufferedReader inputReader = new BufferedReader(
                        new InputStreamReader(
                                socket.getInputStream(),
                                StandardCharsets.UTF_8
                        )
                );

                PrintWriter outputStream = new PrintWriter(socket.getOutputStream());
        ){

            // wait for inputReader is ready
            while (!inputReader.ready());


            Path path = getFilePath(inputReader);

            // Error when no file
            if (!Files.exists(path)) {
                getTemplatePage(outputStream, StatusCodes.NOT_FOUND);
                return;
            }

            getTemplatePage(outputStream, StatusCodes.OK);
            Files.newBufferedReader(path).transferTo(outputStream);
            outputStream.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static Path getFilePath(BufferedReader inputReader) throws IOException {
        final String PATH_TO_FILES_FROM_CLIENT = getPathFromClient(inputReader);
        return Paths.get(PATH_TO_FILES_FROM_SERVER, PATH_TO_FILES_FROM_CLIENT);
    }

    private static String getPathFromClient(BufferedReader inputReader) throws IOException {
        String firstLine = inputReader.readLine();
        String[] parts = firstLine.split(" ");
        if (parts[1].equals("/")) {
            parts[1] = "index.html";
        }
        System.out.println("firstLine: " + firstLine);
        while (inputReader.ready()) {
            System.out.println(inputReader.readLine());
        }
        System.out.println("parts[1] : " + parts[1]);
        return parts[1];
    }


    private static void getTemplatePage(PrintWriter outputStream, StatusCodes statusCode) {

        if (statusCode == StatusCodes.NOT_FOUND) {
            outputStream.println("HTTP/1.1 404 NOT_FOUND");
            outputStream.println("Content-Type: text/html; charset=utf-8");
            outputStream.println();
            outputStream.println("<h1 style='text-align:center;color:red'>FILE NOT FOUND!</h1>");
            outputStream.flush();
        } else {
            outputStream.println("HTTP/1.1 200 OK");
            outputStream.println("Content-Type: text/html; charset=utf-8");
            outputStream.println(); // empty string means BODY is starting
        }

    }
}
