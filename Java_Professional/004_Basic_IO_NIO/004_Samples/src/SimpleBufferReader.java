import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * Created by Yevhenii Tykhonov.
 */
public class SimpleBufferReader {
    public static void main(String[] args) throws IOException {
//        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){
//            int num = Integer.parseInt(br.readLine());
//            System.out.println(num);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
        // System.in => bytes
//        int i = System.in.read();
//        System.out.println(i);
//        System.out.println((char)i);

        InputStreamReader inputStreamReader = new InputStreamReader(System.in);
        int i2 = inputStreamReader.read();
        System.out.println(i2);
        System.out.println((char)i2);
    }
}
