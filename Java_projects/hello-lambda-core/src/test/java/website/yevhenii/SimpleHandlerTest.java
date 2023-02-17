package website.yevhenii;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class SimpleHandlerTest {

    private SimpleHandler simpleHandler;

    @Mock
    Context context;

    @Mock
    LambdaLogger logger;

    @BeforeEach
    public void setup() {
        when(context.getLogger()).thenReturn(logger);

        // replacing logger.log
        doAnswer(call -> {
            System.out.println((String)call.getArgument(0));
            return null;
        }).when(logger).log(anyString());

        simpleHandler = new SimpleHandler();
    }

    @Test
    void shouldReturnUppercaseInput() {
        when(context.getFunctionName()).thenReturn("handleRequest");

        String inputMessage = new String("HELLO, WORLD!");
        Assertions.assertEquals(inputMessage, simpleHandler.handleRequest(inputMessage.toString(), context));
    }
}
