package edu.miu.project.securities;

import edu.miu.project.models.User;
import edu.miu.project.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AuthContext {
    private final UserRepository userRepository;
    private User loggedInUser;

    public AuthContext isAuthenticated() {
        ensureUserIsAuthenticated();
        return this;
    }

    public AuthContext hasRole(String role) {
        ensureUserIsAuthenticated();
        if (loggedInUser.getRoles().stream().noneMatch(r -> r.getName().equals(role))) {
            throw new RuntimeException("User does not have the required role");
        }
        return this;
    }

    public AuthContext hasAnyRole(String ...role) {
        ensureUserIsAuthenticated();
        if (loggedInUser.getRoles().stream().noneMatch(r -> {
            for (String s : role) {
                if (r.getName().equals(s)) {
                    return true;
                }
            }
            return false;
        })) {
            throw new RuntimeException("User does not have the required role");
        }
        return this;
    }

    public AuthContext isAdmin() {
        return hasRole("ROLE_ADMIN");
    }

    public AuthContext isSeller() {
        return hasRole("ROLE_SELLER");
    }

    public AuthContext isApproved() {
        ensureUserIsAuthenticated();
        if (StringUtils.isEmpty(loggedInUser.getApprovedBy())) {
            throw new RuntimeException("User is not approved");
        }
        return this;
    }

    public User getUser() {
        ensureUserIsAuthenticated();
        return loggedInUser;
    }

    public AuthContext isBuyer() {
        return hasRole("ROLE_BUYER");
    }

    public AuthContext hasId(Long id) {
        ensureUserIsAuthenticated();
        if (!loggedInUser.getId().equals(id)) {
            throw new RuntimeException("You are not authorized to perform this action");
        }
        return this;
    }

    private void ensureUserIsAuthenticated() {
        if (loggedInUser == null) {
            String email = SecurityUtils.getPrinciple();
            if (email == null || email.isEmpty() || "anonymousUser".equals(email)) {
                throw new RuntimeException("User not authenticated");
            }
            loggedInUser = userRepository.findByEmailIgnoreCase(email)
                    .orElseThrow(() -> new RuntimeException("User not found"));
        }
    }
}
