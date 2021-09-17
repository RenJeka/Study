import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MyDictionary<TKey, TValue> {

    private MyEntry[] entries;
    private int size = 0;

    public MyDictionary() {
        this.entries = new MyDictionary.MyEntry[size];
    }

    public TValue addEntry(TKey key, TValue value) {
        if (key != null) {
            this.resize();
            this.entries[this.entries.length - 1] = new MyEntry(key, value);
        }
        System.out.println(Arrays.toString(this.entries));
        return this.entries[this.entries.length - 1].value;
    }

    public MyEntry getElementByIndex(int index) {
        return this.entries[index];
    }

    public List<TValue> getElementByKey(TKey key) {
        List<TValue> findedValues = new ArrayList<>();
        for (MyEntry entry : this.entries) {
            if (entry.key.equals(key)) {
                findedValues.add(entry.value);
            }
        }
        return findedValues;
    }

    public int getSize() {
        return size;
    }

    @Override
    public String toString() {
        return "MyDictionary{" +
                "entries=" + Arrays.toString(entries) +
                '}';
    }

    private void resize() {
        this.entries = Arrays.copyOf(this.entries, ++size);
    }

    private class MyEntry {
        TKey key;
        TValue value;

        public MyEntry() {
        }

        public MyEntry(TKey key, TValue value) {
            this.key = key;
            this.value = value;
        }

        @Override
        public String toString() {
            return "MyEntry{" +
                    "key=" + key +
                    ", value=" + value +
                    '}';
        }
    }


}
