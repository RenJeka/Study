package task2;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public abstract class AbstractHandler {
    abstract void open();

    abstract void create();

    abstract void change();

    abstract void save();
}

class XMLHandler extends AbstractHandler {
    @Override
    void open() {
    }

    @Override
    void create() {
    }

    @Override
    void change() {
    }

    @Override
    void save() {
    }
}

class TXTHandler extends AbstractHandler {
    @Override
    void open() {
    }

    @Override
    void create() {
    }

    @Override
    void change() {
    }

    @Override
    void save() {
    }
}

class DOCHandler extends AbstractHandler {
    @Override
    void open() {
    }

    @Override
    void create() {
    }

    @Override
    void change() {
    }

    @Override
    void save() {
    }
}

