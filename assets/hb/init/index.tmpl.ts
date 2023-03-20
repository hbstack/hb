{{- range resources.Match "hb/modules/*/init/index.ts" }}
  {{- printf "import '%s';" . }};
{{- end }}
