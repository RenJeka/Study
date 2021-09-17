import java.lang.ref.PhantomReference;
import java.lang.ref.ReferenceQueue;
import java.lang.ref.SoftReference;
import java.lang.ref.WeakReference;
import java.util.HashMap;
import java.util.Map;
import java.util.WeakHashMap;

public class SWHMnew {
    public static void main(String[] args) {

        Map<String, String> weakHM = new WeakHashMap<>();
        Map<String, String> hashMap = new HashMap<>();


        String keyWeakHM = new String("keyWeakHM");
        String keyHM = new String("keyHM");

        weakHM.put(keyWeakHM, "weakHash");
        hashMap.put(keyHM, "Hash");

        System.out.println("Before GC " + "weak = " + weakHM.get("keyWeakHM") + "; hashMap = " + hashMap.get("keyHM"));

        keyWeakHM = null;
        keyHM = null;

        System.gc();

        System.out.println("After GC " + "weak = " + weakHM.get("keyWeakHM") + " ;  hashMap = " + hashMap.get("keyHM"));

//        // soft ref
//        Integer test = 1; // Сильная ссылка
//        SoftReference<Integer> softReference = new SoftReference<>(test); // Обернули слабой ссылкой
//        test = null; // Мы потеряли ссылку
//
//
////         weak ref
//        WeakReference<Integer> myWeakRef = new WeakReference<>(test);
//        test = null;
//
////         phantomRef
//        PhantomReference<Integer> myPhantomRef = new PhantomReference<>(test, new ReferenceQueue<>());
    }
}
