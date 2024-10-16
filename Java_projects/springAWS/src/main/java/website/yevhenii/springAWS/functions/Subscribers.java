package website.yevhenii.springAWS.functions;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import website.yevhenii.springAWS.model.Subscriber;
import website.yevhenii.springAWS.service.SubscriberService;

import java.util.List;
import java.util.function.Consumer;
import java.util.function.Supplier;

@Configuration
public class Subscribers {
    private static final Logger LOG = LoggerFactory.getLogger(Subscriber.class);

    private final SubscriberService subscribers;

    public Subscribers(SubscriberService subscribers) {
        this.subscribers = subscribers;
    }

    @Bean
    public Supplier<List<Subscriber>> findAll() {
        LOG.info("Subscribers.findAll() was called.");
        return () -> subscribers.findAll();
    }

    @Bean
    public Consumer<String> create() {
        return (email) -> subscribers.create(email);
    }
}
