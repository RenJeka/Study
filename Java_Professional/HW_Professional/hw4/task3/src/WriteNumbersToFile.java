import java.io.*;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import static java.lang.Integer.parseInt;

public class WriteNumbersToFile {
    public static void main(String[] args) {
        File myFile = new File("myTestFile.txt");
        int tempCharByte = 0; // Переменная для временной записи байтов во время работы "FileInputStream"
        String resultStringFromFile = null;
        StringBuilder sb = new StringBuilder();
        List<Integer> numbersList = new ArrayList<>();
        String[] numberStringsArr = null;

        try (
                FileWriter fw = new FileWriter(myFile, true);
                FileWriter fw2 = new FileWriter(myFile, true);
                FileInputStream fis = new FileInputStream(myFile)
        ) {
            new FileOutputStream(myFile).close(); // Стираем данные с файла

            // Записываем файл random-числами
            int counter = 0;
            while (counter < 5) {
                String randomNumberString = Math.round(Math.random() * 1000) + " ";
                fw.write(randomNumberString);
                counter++;
            }

            fw.close();

            // Считываем файл и переводим в строку текста (вариант по каждому байту)
//            while ((tempCharByte = fis.read()) != -1) {
//                sb.append((char) tempCharByte);
//            }

            // Считываем файл и переводим в строку текста (через считывание всех байтов)
            byte[] bytes = fis.readAllBytes();
            for (byte currentByte :bytes){
                sb.append((char) currentByte);

            }
            resultStringFromFile = sb.toString();
            numberStringsArr =  resultStringFromFile.split(" ");

            // Текст переводим в числа и сотрируем
            for (String numbersString : numberStringsArr) {
                numbersList.add(parseInt(numbersString));
            }
            numbersList.sort(Comparator.comparingInt(o -> o));

            new FileOutputStream(myFile).close(); // Стираем данные с файла

            // Записываем отсортированный массив в файл
            for (Integer number : numbersList) {
                fw2.write(number + " ");
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
