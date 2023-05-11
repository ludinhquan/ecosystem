
{{- define "common.image.prefix" -}}
{{ default "com.ecosystem" }}
{{- end -}}

{{- define "common.service.prefix" -}}
{{ default "ecosystem" }}
{{- end -}}

{{- define "common.hosts.default" -}}
{{ default "iot.ecosystem.com" }}
{{- end -}}
