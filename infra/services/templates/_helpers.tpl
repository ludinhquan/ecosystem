
{{- define "common.image.prefix" -}}
{{ default "com.ecosystem.iot" }}
{{- end -}}

{{- define "common.service.prefix" -}}
{{ default "api" }}
{{- end -}}

{{- define "common.hosts.default" -}}
{{ default "iot.ecosystem.com" }}
{{- end -}}
