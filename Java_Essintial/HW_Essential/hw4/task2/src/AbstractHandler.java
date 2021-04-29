public abstract class AbstractHandler {
    abstract void open();
    abstract void create();
    abstract void change();
    abstract void save();
}

class XMLHandler extends AbstractHandler {
    @Override
    void open() {
        System.out.println("Файл .xml был открыт");
    }

    @Override
    void create() {
        System.out.println("Файл .xml был создан");
    }

    @Override
    void change() {
        System.out.println("Файл .xml был изменен");
    }

    @Override
    void save() {
        System.out.println("Файл .xml был сохранен");
    }
}

class TXTHandler extends AbstractHandler {
    @Override
    void open() {
        System.out.println("Файл .txt был открыт");
    }

    @Override
    void create() {
        System.out.println("Файл .txt был создан");
    }

    @Override
    void change() {
        System.out.println("Файл .txt был изменен");
    }

    @Override
    void save() {
        System.out.println("Файл .txt был сохранен");
    }
}

class DOCHandler extends AbstractHandler {
    @Override
    void open() {
        System.out.println("Файл .doc был открыт");
    }

    @Override
    void create() {
        System.out.println("Файл .doc был создан");
    }

    @Override
    void change() {
        System.out.println("Файл .doc был изменен");
    }

    @Override
    void save() {
        System.out.println("Файл .doc был сохранен");
    }
}
