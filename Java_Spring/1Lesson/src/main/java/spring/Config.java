package spring;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import spring.impl.audio.Sony;
import spring.impl.car.Audi;
import spring.impl.car.Kia;
import spring.impl.navigation.Navitel;
import spring.interfaces.AudioSystem;
import spring.interfaces.NavigationSystem;

@Configuration
public class Config {

    @Bean
    public AudioSystem sonyAudio(){
        return new Sony();
    }
    @Bean
    public NavigationSystem navitelNav(){
        return new Navitel();
    }

    @Bean
    public Audi car(AudioSystem audioSystem, NavigationSystem navigationSystem){
        return new Audi(audioSystem,navigationSystem);
    }

    @Bean
    public Kia car2(){
        return new Kia();
    }
}
