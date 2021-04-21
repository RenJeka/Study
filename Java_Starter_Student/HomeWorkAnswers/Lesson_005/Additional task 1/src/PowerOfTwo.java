/**
 * Created by Evgeniy on 11.03.2016.
 */

import java.util.Scanner;

public class PowerOfTwo {
    public static void main(String[] args) {
        // Ввод с клавиатуры
        Scanner sc = new Scanner(System.in);
        long num = sc.nextLong();

        // 128 - 1000 0000
        // &
        // 127 - 0111 1111
        //     - 0000 0000 OK
        if ((num & (num - 1)) == 0) {
            System.out.println(num + " является степенью 2");
        } else {
            System.out.println(num + " не является степенью 2");
        }
    }
}
