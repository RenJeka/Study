package javaProfessional.ex_004_comparable.interface_comparable;

public class Animal implements Comparable { // <Animal>{
    String breed;
    int weight;
    int speed;
    int price;

    Animal(String breed, int weight, int speed, int price) {
        this.breed = breed;
        this.weight = weight;
        this.speed = speed;
        this.price = price;
    }

    public String toString() {
        return this.breed + " " + this.weight + " " + this.speed + " " + this.price;
    }

    // Сортируем по скорости/цене
    public int compareTo(Object o) {              //    public int compareTo(Animal o) {
        int tmpSpeed = this.speed - ((Animal)o).speed; //    int tmp = this.speed - o.speed;
        int tempPrice = this.price - ((Animal) o).price;
        int tempWeight = this.weight - ((Animal) o).weight;
        int tempBreed = this.breed.compareTo(((Animal) o).breed);

        if (tmpSpeed != 0) {
            return tmpSpeed;
        } else if (tempPrice != 0) {
            return tempPrice;
        } else if (tempWeight != 0) {
            return tempWeight;
        } else {
            return tempBreed;
        }
//        if (tmp == 0) {
//            return this.price - ((Animal)o).price;
//        } else {
//            return tmp;
//        }
    }

    // Сравнение 2-х строковых значений
    // return this.breed.compareTo(((Animal)o).breed);
}
