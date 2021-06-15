public interface IList<T> {

    int totalElements = 0;

    void addElement(T element);

    T getElementByIndex(int index);
}
