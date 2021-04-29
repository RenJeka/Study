public class Player implements Playable, Recordable {
    @Override
    public void play() {
        System.out.println("playing music...");
    }

    @Override
    public void pause() {
        System.out.println("pause...");
    }

    @Override
    public void stop() {
        System.out.println("stop playing music!");
    }

    @Override
    public void record() {
        System.out.println("record sound...");
    }
}
