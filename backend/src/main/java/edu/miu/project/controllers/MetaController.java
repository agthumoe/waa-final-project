package edu.miu.project.controllers;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.commons.exceptions.HttpStatusException;
import edu.miu.project.models.Meta;
import edu.miu.project.models.dtos.MetaDto;
import edu.miu.project.models.dtos.MetaRequest;
import edu.miu.project.services.MetaService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/metas")
@RequiredArgsConstructor
@Tag(name = "Metas", description = "Meta endpoints for the application")
public class MetaController {
    private final MetaService metaService;
    private final CustomMapper mapper;

    @GetMapping
    public List<MetaDto> getAllMetas() {
        return mapper.map(metaService.findAll(), MetaDto.class);
    }

    @PostMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @SecurityRequirement(name = "bearerAuth")
    public MetaDto createMeta(MetaRequest request) {
        return mapper.map(metaService.create(mapper.map(request, Meta.class)), MetaDto.class);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @SecurityRequirement(name = "bearerAuth")
    public void update(@PathVariable Long id, @RequestBody @Validated MetaRequest request) {
        Meta meta = metaService.findOne(id).orElseThrow(() -> new HttpStatusException("Meta not found", 404));
        mapper.map(request, meta);
        metaService.update(meta);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @SecurityRequirement(name = "bearerAuth")
    public void delete(@PathVariable Long id) {
        // TODO:: remove the meta from all products
        metaService.deleteById(id);
    }
}
