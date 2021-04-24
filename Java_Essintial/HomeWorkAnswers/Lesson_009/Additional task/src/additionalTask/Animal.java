package additionalTask;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class Animal {
    //Поля класа
    String name;
    int age;
    Boolean tail;

    //Конструктор с параметрами
    public Animal(String name, int age, Boolean tail) {
        this.name = name;
        this.age = age;
        this.tail = tail;
    }

    //Перегрузка методов toString(). equals(), hashCode()
    @Override
    public String toString() {
        return "Имя: " + this.name + "; возраст: " + this.age + "; хвост: " + this.tail;
    }

    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }
}
