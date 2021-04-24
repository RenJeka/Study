package task4;

/**
 * Created by WinDRunneR on 05.05.2016.
 */
public class DocumentWorker {
    void openDocument() {
        System.out.println("Документ открыт");
    }

    void editDocument() {
        System.out.println("Редактирование документа доступно в версии Про");
    }

    void saveDocument() {
        System.out.println("Сохранение документа доступно в версии Про");
    }

}

class ProDocumentWorker extends DocumentWorker {
    @Override
    void editDocument() {
        System.out.println("Документ сохранен в старом формате, сохранение в остальных форматах доступно в версии Эксперт");
    }

    @Override
    void saveDocument() {
        System.out.println("Документ отредактирован");
    }
}

class ExpertDocumentWorker extends ProDocumentWorker {
    @Override
    void saveDocument() {
        System.out.println("Документ сохранен в новом формате");
    }
}