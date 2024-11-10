package ma.TP11.TP11.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Apply CORS to all routes
        registry.addMapping("/**")  // Apply to all endpoints
                .allowedOrigins("http://localhost:3000")  // Allow React app to communicate
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // Allow methods
                .allowedHeaders("*")  // Allow all headers
                .allowCredentials(true);  // Allow cookies and credentials (if needed)
    }
}
