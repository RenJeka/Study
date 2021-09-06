import java.io.*;

public class CreateFile {
    public static void main(String[] args) {

        File myFile = new File("myTestFile.txt");
        int tempCharByte = 0;
        try (FileWriter fw = new FileWriter(myFile, true);
        FileReader fr = new FileReader(myFile)){
            fw.write("Some text ");
            fw.close();
            while ((tempCharByte = fr.read()) != -1) {
                System.out.print((char)tempCharByte);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
