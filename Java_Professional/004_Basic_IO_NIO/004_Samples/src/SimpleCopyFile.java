import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

/**
 * Created by Yevhenii Tykhonov.
 */
public class SimpleCopyFile {
    public static void main(String[] args) {
        File sourceFile = new File("D:\\Java Professional Course_video\\004_Basic_IO_NIO\\004_Samples\\sourceFile.txt");
        File targetFile = new File("D:\\Java Professional Course_video\\004_Basic_IO_NIO\\004_Samples\\targetFile.txt");

        try {
            Files.copy(sourceFile.toPath(), targetFile.toPath());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
