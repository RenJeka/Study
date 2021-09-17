/**
 * Created by Yevhenii Tykhonov.
 */
public class SimpleString {
    public static void main(String[] args) {
        String str = "Hello";  // literal
        String str2 = new String("Hello"); // new

        char[] arr = {'H', 'e', 'l', 'l', 'o'};
        String str3 = new String(arr, 0, 2);

        System.out.println(str3);
    }
}
