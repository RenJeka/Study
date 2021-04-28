public class ExpertDocumentWorker extends ProDocumentWorker{
    static final String EXPERT_KEY = "02_EXPERT";

    @Override
    public void saveDocument() {
        System.out.println("Документ сохранен в новом формате");
    }
}
