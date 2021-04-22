package src.com.company.hw9;

public class Arrays {


    public static void main(String[] args) {
        int arrayToReverse[] = new int[]{12, 22, 43, 59, 66, 28, 66, 39, 97, 100};
        int tempArray[] = new int[10];
        for (int index = 0; index < arrayToReverse.length; index++) {
            tempArray[index] = arrayToReverse[arrayToReverse.length - 1 - index];
        }
        arrayToReverse = tempArray;

        for (int elem : arrayToReverse) {
            System.out.print( elem + " ");
        }
    }
}
