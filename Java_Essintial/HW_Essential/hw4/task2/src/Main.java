import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {

    public static void defineDocument(File file) {

        String fileExtension = getFileExtension(file.getName());
        AbstractHandler handler = null;
        switch (fileExtension) {
            case "txt":
                 handler = new TXTHandler();
                break;
            case "xml":
                handler = new XMLHandler();
                break;
            case "doc":
                handler = new DOCHandler();
                break;

            default:
                System.out.println("Не верный формат файла. Попробуйте еще раз!");
                break;
        }
        if (handler != null) {
            handler.create();
            handler.open();
            handler.change();
            handler.save();
        }


    }

    private static String getFileExtension(String fileName) {
        int index = fileName.lastIndexOf('.');
        return index == -1 ? null : fileName.substring(index + 1);
    }

    public static void main(String[] args) throws FileNotFoundException {
        AbstractHandler xml_1 = new XMLHandler();
        AbstractHandler txt_1 = new TXTHandler();
        AbstractHandler doc_1 = new DOCHandler();

        File myFile = new File("someTextFile.xml");
        Scanner scanner = new Scanner(myFile);

        defineDocument(myFile);
        scanner.close();
    }
}
