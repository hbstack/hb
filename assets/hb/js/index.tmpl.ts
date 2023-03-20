// See https://github.com/twbs/bootstrap/blob/main/js/index.umd.js
{{/* Import module's js/index.ts directly. */}}
{{- range resources.Match "hb/modules/*/js/index.ts" }}
  import '{{ .Name }}';
{{- end }}
{{- $ctx := . }}
{{/* Execute module's js/index.tmpl.ts as a template. */}}
{{- $pattern := `import(.+)['"]\.(.+)['"]` }}
{{- range resources.Match "hb/modules/*/js/index.tmpl.ts" }}
  {{- $mod := . | resources.ExecuteAsTemplate (replace .Name "index.tmpl.ts" "index.ts") $ctx }}
  {{/* Get the module name. */}}
  {{- $name := "" }}
  {{- $matches := findRESubmatch `hb/modules/(.+)/js/index.tmpl.ts` .Name 1 }}
  {{- with index $matches 0 }}
    {{- $name = index . 1 }}
  {{- end }}
  {{- $replacement := printf `import$1'hb/modules/%s/js$2'` $name }}
  {{/* Resolve the JS module paths that starts with "./". */}}
  {{- $content := replaceRE $pattern $replacement $mod.Content }}
  {{- $content }}
{{- end -}}
