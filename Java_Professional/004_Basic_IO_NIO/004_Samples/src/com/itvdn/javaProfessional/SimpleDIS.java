package com.itvdn.javaProfessional;

import java.io.*;

public class SimpleDIS {
    public static void main(String[] args) {

        try (
                DataOutputStream dataOut = new DataOutputStream(new BufferedOutputStream(new FileOutputStream("data.txt")));
                DataInputStream dataIn = new DataInputStream(new BufferedInputStream(new FileInputStream("data.txt")));
            ){

            dataOut.writeShort(1000);
            dataOut.writeInt(1111);
            dataOut.writeLong(10L);
            dataOut.writeUTF("Hello world!");
            dataOut.flush();

            System.out.println("Short: " + dataIn.readShort());
            System.out.println("Int: " + dataIn.readInt());
            System.out.println("Long: " + dataIn.readLong());
            System.out.println("UTF: " + dataIn.readUTF());

        } catch (IOException e) {
            e.printStackTrace();

        }

    }
}
