import java.util.*;


public class MySimpleHashtable<K, V> {

    private MyEntry<?, ?>[] hashTable;

    private int countOfEntries;


    public MySimpleHashtable() {
        this(11);
    }

    public MySimpleHashtable(int initialCapacity) {
        if (initialCapacity < 0) {
            throw new IllegalArgumentException("Illegal capacity" + initialCapacity);
        }

        if (initialCapacity == 0) {
            initialCapacity = 1;
        }

        hashTable = new MyEntry<?,?>[initialCapacity];
    }


    public V put(K key, V value) {
        if (value == null) {
            throw new NullPointerException();
        }

        MyEntry<?, ?> tempHashTable[] = hashTable;
        int hash = key.hashCode();
        int index = (hash & 0x7FFFFFFF) % tempHashTable.length;

        MyEntry<K,V> tempEntry = (MyEntry<K, V>)tempHashTable[index];

        for (; tempEntry != null; tempEntry = tempEntry.next) {
            if ((tempEntry.hash == hash) && tempEntry.key.equals(key)) {
                V oldValue = tempEntry.value;
                tempEntry.value = value;
                return oldValue;
            }
        }

        addEntry(hash, key, value, index);
        return null;
    }

    private void addEntry(int hash, K key, V value, int index) {
        MyEntry<?,?> tempTable[] = hashTable;

        // Если при добавлении элемента мы превышаем лимит — необходимо пересобрать таблицу с новым Capacity и пересобрать хеш и  индекс добавляемого элемента (так как размер таблицы стал больше, а индекс расчитывается от размера всей таблицы)

        if (countOfEntries > tempTable.length) {
            rehash();

            tempTable = hashTable;
            hash = key.hashCode();
            index = (hash & 0x7FFFFFFF) % tempTable.length;
        }

        MyEntry<K, V> tempEntry = (MyEntry<K, V>) tempTable[index];
        tempTable[index] = new MyEntry<>(hash, key, value, tempEntry);
        countOfEntries++;
    }

    protected void rehash() {

        // Сначала копируем старые значения Capacity и таблицы
        int oldCapacity = hashTable.length;
        MyEntry<?, ?>[] oldHashTable = hashTable;

        // Увеличиваем Capacity
        int newCapacity = (oldCapacity * 2) + 1;

        // Делаем новую таблицу с новым Capacity и заполняем её данными со старой таблицы
        MyEntry<?,?>[] newHashTable = new MyEntry<?,?>[newCapacity];

        for (int i = oldCapacity; i-- > 0; ) {
            for (MyEntry<K, V> oldEntry = (MyEntry<K, V>) oldHashTable[i]; oldEntry != null; ) {
                MyEntry<K,V> tempOldEntry = oldEntry;
                oldEntry = oldEntry.next;

                int index = (tempOldEntry.hash & 0x7FFFFFFF) % newCapacity;
                tempOldEntry.next = (MyEntry<K, V>) newHashTable[index];
                newHashTable[index] = tempOldEntry;
            }
        }
    }

    public List<MyEntry<K, V>> getEntries() {
        List<MyEntry<K, V>> returnedHashTable = new ArrayList<>();

        for (int i = 0; i < hashTable.length; i++) {
            if (hashTable[i] != null) {
                returnedHashTable.add((MyEntry<K, V>) hashTable[i]);
            }
        }
        return returnedHashTable;

    }

    public void getAllEntries() {
        for (int i = 0; i < hashTable.length; i++) {
            System.out.println(hashTable[i]);
        }
    }

    @Override
    public String toString() {
        List<MyEntry<K, V>> notNullEntries = getEntries();
        List<String> outputStrings = new ArrayList<>();


        for (int i = 0; i < notNullEntries.size(); i++) {

            String tempString = notNullEntries.get(i).key + " = " + notNullEntries.get(i).value;
            outputStrings.add(tempString) ;
        }
        return outputStrings.toString();
    }
}



class MyEntry<K, V> implements Map.Entry<K, V> {

    final int hash;
    final K key;
    V value;
    MyEntry<K, V> next;

    protected MyEntry(int hash, K key, V value, MyEntry<K, V> next) {
        this.hash = hash;
        this.key = key;
        this.value = value;
        this.next = next;
    }

    @Override
    public K getKey() {
        return key;
    }

    @Override
    public V getValue() {
        return value;
    }

    @Override
    public V setValue(V value) {
        if (value == null) {
            throw new NullPointerException();
        }

        V oldValue = this.value;
        this.value = value;
        return oldValue;
    }
}

class Main {
    public static void main(String[] args) {

//            Hashtable myHashTable = new Hashtable();
//
//            myHashTable.put(1, "abc");
//            myHashTable.put(33, "test");
//            myHashTable.put("some key", "jjds");
//            myHashTable.put("key4", "jjds");
//            System.out.println(myHashTable);
//
//            System.out.println(new Integer(55).hashCode());
//            System.out.println(new String("Some text").hashCode());
//
//            Hashtable table2 = new Hashtable(10, 0.9f);
//
//            System.out.println("-------------------------------");
//            Enumeration tableEnum =  myHashTable.elements();
//            Enumeration keys = myHashTable.keys();
//
//            while (tableEnum.hasMoreElements()) {
//                System.out.println(tableEnum.nextElement());
//            }
//            System.out.println("-------------------------------");
//            while (keys.hasMoreElements()) {
//                System.out.println(keys.nextElement());
//            }

        MySimpleHashtable table1 = new MySimpleHashtable();

        table1.put(1, "abc");
        table1.put(55, "ddd");
        table1.put(128, "some value 3");

//        table1.getEntries();
        System.out.println(table1);

    }
}
