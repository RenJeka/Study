package task3;

/**
 * Created by WinDRunneR on 05.05.2016.
 */

// Имплементация от интерфейсов
public class Player implements Playable, Recodable {
    // Реализуем абстрактные методы интерфейсов
    @Override
    public void play() {
    }

    @Override
    public void record() {
    }

    @Override
    public void pause() {
    }

    @Override
    public void stop() {
    }

    public static void main(String[] args) {
        // Создаем экземпляр класса
        Player player = new Player();

        player.play();
        player.pause();
        player.record();
        player.stop();
    }
}
