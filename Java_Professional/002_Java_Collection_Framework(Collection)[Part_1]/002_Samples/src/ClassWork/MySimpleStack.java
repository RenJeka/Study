package ClassWork;

import java.util.Arrays;

public class MySimpleStack {
    private int maxSize;
    private long[] stackArray;
    private int top;

    public MySimpleStack(int maxSize) {
        this.maxSize = maxSize;
        this.stackArray = new long[maxSize];
        this.top = -1;

    }

    public void push(long element) {
        stackArray[++top] = element;
    }

    public long pop() {
        return stackArray[top--];
    }

    public long peek() {
        return stackArray[top];
    }

    public boolean isEmpty() {
        return  top == -1;
    }

    public int getTop() {
        return top;
    }

    @Override
    public String toString() {
        String returnedString = "[ ";

        for (int i = top; i > -1; i--) {
            if (i == 0) {
                returnedString += this.stackArray[i] + " ]";
            } else {
                returnedString += this.stackArray[i] + "   ";
            }
        }
        return returnedString;
    }
}

class StackMain {
    public static void main(String[] args) {
        MySimpleStack mySimpleStack = new MySimpleStack(10);
        mySimpleStack.push(10);
        mySimpleStack.push(20);
        mySimpleStack.push(30);
        mySimpleStack.push(550);
        mySimpleStack.push(31351);
        System.out.println(mySimpleStack);
        mySimpleStack.pop();
        mySimpleStack.pop();
        System.out.println(mySimpleStack);
        mySimpleStack.push(999);
        mySimpleStack.push(9549);
        mySimpleStack.push(1000);
        System.out.println(mySimpleStack);
        mySimpleStack.pop();
        System.out.println(mySimpleStack);
        mySimpleStack.pop();
        System.out.println(mySimpleStack);


//        mySimpleStack.pop();
//        mySimpleStack.peek();
//        mySimpleStack.isEmpty();

//        while (!mySimpleStack.isEmpty()) {
//            long popedElement = mySimpleStack.pop();
//            System.out.print(popedElement + " ");
//        }

    }
}
