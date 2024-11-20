package edu.miu.project.commons.exceptions;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class HttpStatusException extends RuntimeException {
    private final HttpStatus status;

    public HttpStatusException(HttpStatus status) {
        super();
        this.status = status;
    }

    public HttpStatusException(String message, HttpStatus status) {
        super(message);
        this.status = status;
    }

    public HttpStatusException(String message, Throwable cause, HttpStatus status) {
        super(message, cause);
        this.status = status;
    }

    public HttpStatusException(String message, int status) {
        super(message);
        this.status = HttpStatus.valueOf(status);
    }
}
