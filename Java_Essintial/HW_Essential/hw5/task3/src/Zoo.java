import java.util.ArrayList;

public class Zoo {
    private ArrayList<String> animals = new ArrayList<>();

    public Zoo() {
        this.animals.add("Zebra");
        this.animals.add("Giraffe");
        this.animals.add("Lion");
        this.animals.add("Crocodile");
        this.animals.add("Pheasant blue");
        this.animals.add("Pheasant orange");
        this.animals.add("White Peacock");
        this.animals.add("Pelican");
    }

    public ArrayList<String> getAnimals() {
        return animals;
    }

    public void setAnimals(String animal) {
        this.animals.add(animal);
    }
}
