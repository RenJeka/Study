package com.itvdn.javaProfessional;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;

public class SimpleUrlNew {
    public static void main(String[] args) throws MalformedURLException {
        URL nbuAPI = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");

        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(nbuAPI.openStream()));
            String str;
            while ((str = br.readLine()) != null) {
                System.out.println(str);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
