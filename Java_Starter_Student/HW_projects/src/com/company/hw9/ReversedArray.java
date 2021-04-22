package src.com.company.hw9;

public class ReversedArray {

    static int[] myReverse(int[] array) {
        int tempArray[] = new int[array.length];
        for (int i = 0; i < array.length; i++) {
            tempArray[i] = array[array.length - 1 - i];
        }
        return tempArray;
    }

    static int[] subArray(int[] array, int index, int count) {
        int tempArray[] = new int[count];
//        for (int i = index; i < index + count; i++) {
        for (int i = 0; i < count; i++) {
            if ((i + index) >= array.length) {
                tempArray[i] = 1;
                continue;
            }
            tempArray[i] = array[i + index];
        }

        return tempArray;
    }

    public static void main(String[] args) {
        int myArray[] = {2, 22, 44, 53, 108, 22, 34, 95, 66, 47};

        int reverseArray[] = myReverse(myArray);
        int slicedArray[] = subArray(myArray, 3, -11);

        System.out.print("\nReversed Array: ");
        for (int i : reverseArray) {
            System.out.print(i + " ");
        }

        System.out.print("\nSliced Array: ");
        for (int a : slicedArray) {
            System.out.print(a + " ");
        }
    }
}
