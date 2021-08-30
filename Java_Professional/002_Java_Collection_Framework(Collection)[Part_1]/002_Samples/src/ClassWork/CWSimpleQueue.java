package ClassWork;

public class CWSimpleQueue {
    private int maxSize;
    private long[] queueArray;
    private int front; // флаг первого элемента в очереди
    private int rear; // флаг последнего элемента
    private int nItems; // флаг, который будет увеличиваться, когда мы добавляем значение в очередь (Размер очереди, так как поле "maxSize" показывает максимальный , а не текущий размер очереди)

    public CWSimpleQueue(int maxSize) {
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

    public long remove() {
        long tmp = queueArray[front++];
        if (front == maxSize) {
            front = 0;
        }
        nItems--;
        return tmp;
    }
}

class CWQueueMain {
    public static void main(String[] args) {
        CWSimpleQueue mySQ = new CWSimpleQueue(2);

        mySQ.insert(10);
        mySQ.insert(20);
        mySQ.insert(30);
        mySQ.insert(40);
        mySQ.remove();
        mySQ.remove();
        mySQ.insert(110);
        mySQ.insert(120);
        mySQ.insert(130);
        mySQ.insert(150);
        mySQ.insert(160);
        mySQ.insert(170);
        mySQ.insert(180);
        mySQ.insert(190);

        while (!mySQ.isEmpty()) {
            long n = mySQ.remove();
            System.out.print(n + " ");
        }

    }
}
