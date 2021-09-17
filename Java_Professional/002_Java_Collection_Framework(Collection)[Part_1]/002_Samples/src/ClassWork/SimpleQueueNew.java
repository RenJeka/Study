package ClassWork;

public class SimpleQueueNew {

    private int maxSize; // 10 // initial Capacity
    private long[] queueArray;
    private int front;
    private int rear;
    private int nItems;

    public SimpleQueueNew(int maxSize) {
        this.maxSize = maxSize;
        this.queueArray = new long[maxSize];
        this.front = 0;
        this.rear = -1;
        this.nItems = 0;
    }

    public void insert(long element) {
        if (rear == maxSize - 1) {
            rear = -1;
        }
        queueArray[++rear] = element;
        nItems++;

    }

    public boolean isEmpty() {
        return (nItems == 0);
    }

    /**
     * Аналог метода pop(). Удаляет и возвращает последний элемент из нашей очереди.
     * @return
     */
    public long remove() {
        long tmp = queueArray[front++];
        if (front == maxSize) {
            front = 0;
        }
        nItems--;
        return tmp;
    }
}

class  queueMain {
    public static void main(String[] args) {
        SimpleQueueNew simpleQueue = new SimpleQueueNew(2);

        simpleQueue.insert(10);
        simpleQueue.insert(20);
        simpleQueue.insert(30);
        simpleQueue.insert(40);
        simpleQueue.remove();
        simpleQueue.remove();
        simpleQueue.insert(110);
        simpleQueue.insert(120);
        simpleQueue.insert(130);
        simpleQueue.insert(140);

        while (!simpleQueue.isEmpty()) {
            long n = simpleQueue.remove();
            System.out.print(n + " ");
        }
    }
}
