import java.io.ByteArrayInputStream;

/**
 * Created by Yevhenii Tykhonov.
 */
public class SimpleByteArrayInputStream {
    public static void main(String[] args) {
        byte[] arr = new byte[]{1, 3, 5, 7};
        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(arr);

        int tmp;
        while ((tmp = byteArrayInputStream.read()) != -1) {
            System.out.println(tmp);
        }

        String str = "Hello";
        byte[] arr2 = str.getBytes();
        ByteArrayInputStream byteArrayInputStream1 = new ByteArrayInputStream(arr2, 0, 70);

        int tmp2;
        while ((tmp2 = byteArrayInputStream1.read()) != -1) {
            System.out.println((char)tmp2);
        }
    }
}
