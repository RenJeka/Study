package ClassWork;

public class SimpleStackNew {
    private int maxSize;
    private long[] stackArray;
    private int top;

    public SimpleStackNew(int maxSize) {
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
        return top == -1;
    }
}

class StackMainNew {
    public static void main(String[] args) {
        SimpleStackNew simpleStackNew = new SimpleStackNew(10);
        simpleStackNew.push(10);
        simpleStackNew.push(20);
        simpleStackNew.push(30);
//        System.out.println();
        System.out.println(simpleStackNew.pop());
        System.out.println(simpleStackNew.peek());
        System.out.println(simpleStackNew.isEmpty());

        isEmpty(simpleStackNew);
    }

    private static void isEmpty(SimpleStackNew simpleStackNew) {
        while (!simpleStackNew.isEmpty()) {
            long popElement = simpleStackNew.pop();
            System.out.println(popElement + " ");
        }
    }
}
