package main.java;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

public class Calculator extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        handleRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        handleRequest(request, response);
    }

    private void handleRequest(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        response.setContentType("text/html;charset=UTF-8");

        PrintWriter writer = response.getWriter();
        Enumeration<String> allQueryParams = request.getParameterNames();

        try {
            writer.println("<html><head><title>AWS_Calculator</title></head><body><h1>Hello, World!</h1> </br>");

            int i = 1;

            while (allQueryParams.hasMoreElements()) {
                String paramName = allQueryParams.nextElement();
                String value = request.getParameter(paramName);
                writer.println("<h5>" + paramName + " : "+ value +"</h5>");
                i++;
            }

            writer.println("</body></html>");
        } finally {
            writer.close();
        }
    }
}
