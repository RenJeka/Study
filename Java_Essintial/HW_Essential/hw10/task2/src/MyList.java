import java.util.Arrays;

public class MyList<T> implements IList<T>{

    private T[] elements = null;
    public MyList(T[] elements) {
        this.elements = elements;
    }

    @Override
    public void addElement(T element) {
        T clonedElements[] = Arrays.copyOf(this.elements, (this.elements.length + 1));
        clonedElements[clonedElements.length - 1] = element;
        this.elements = clonedElements.clone();
        int counter = 0;
        for (T elem : this.elements) {
            System.out.println("element["+ counter++ +"] : " + elem);
        }
    }

    @Override
    public T getElementByIndex(int index) {
        return this.elements[index];
    }
}
