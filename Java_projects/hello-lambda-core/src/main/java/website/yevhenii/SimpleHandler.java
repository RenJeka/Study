package website.yevhenii;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class SimpleHandler implements RequestHandler<Object, String> {


    @Override
    public String handleRequest(Object input, Context context) {
        LambdaLogger logger = context.getLogger();
        logger.log("----------------- LOG START ---------------");
        logger.log("Function '" + context.getFunctionName() + "' called.\n");
        logger.log(input.toString());
        logger.log("----------------- LOG END -----------------");
        return input.toString();
    }
}
