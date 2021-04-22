package src.com.company.hw9;

public class UserArray {

    static int[] pushToEnd(int[] array, int pushValue) {
        int tempArray[] = new int[array.length + 1];
        for (int i = 0; i < array.length; i++) {
            tempArray[i] = array[i];
        }
//        Adding last element
        tempArray[array.length] = pushValue;
        return tempArray;
    }

    static int[] pushToStart(int[] array, int pushValue) {
        int tempArray[] = new int[array.length + 1];

        tempArray[0] = pushValue;
        for (int i = 0; i < array.length; i++) {
            tempArray[i + 1] = array[i];
        }
        return tempArray;
    }

    public static void main(String[] args) {
        int myArray[] = {2, 22, 44, 53};

        myArray =  pushToEnd(myArray, 111);
        System.out.print("\nmyArray after pushToEnd: ");
        for (int i : myArray) {
            System.out.print(i + " ");
        }

        myArray = pushToStart(myArray, 999);
        System.out.print("\nmyArray after pushToStart: ");
        for (int i : myArray) {
            System.out.print(i + " ");
        }
    }
}
