# Script de Preparação para Produção - Vivi Sanches Site
# Este script resolve os problemas de imagens e gera a pasta final para Hostinger.

# 1. Resolver Imagens em 404
$destDir = "$PSScriptRoot\public\images\servicos"
if (!(Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
}

$images = @{
    "C:\Users\Gustavo\.gemini\antigravity\brain\b59b3cf4-479e-4fd0-bf3d-2f184a870ed5\liberacao_miofascial_1774462123075.png" = "liberacao-miofascial.png"
    "C:\Users\Gustavo\.gemini\antigravity\brain\b59b3cf4-479e-4fd0-bf3d-2f184a870ed5\diu_contracepcao_1774462137605.png" = "diu.png"
    "C:\Users\Gustavo\.gemini\antigravity\brain\b59b3cf4-479e-4fd0-bf3d-2f184a870ed5\depilacao_laser_1774462182478.png" = "depilacao-laser.png"
}

Write-Host ">>> Sincronizando imagens dos novos serviços..." -ForegroundColor Cyan
foreach ($src in $images.Keys) {
    if (Test-Path $src) {
        $dest = Join-Path $destDir $images[$src]
        Copy-Item $src $dest -Force
        Write-Host "[OK] Copiado: $($images[$src])"
    }
}

# 2. Executar Build de Produção
Write-Host "`n>>> Iniciando o Build de Produção (npm run build)..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n>>> SUCESSO! <<<" -ForegroundColor Green
    Write-Host "Os arquivos prontos para subir na Hostinger estão na pasta: " -NoNewline
    Write-Host "$PSScriptRoot\out" -ForegroundColor Gold
    Write-Host "`nInstruções Hostinger:"
    Write-Host "1. Pegue o conteúdo da pasta 'out'."
    Write-Host "2. Suba tudo para o diretório 'public_html' via FTP ou Gerenciador de Arquivos."
} else {
    Write-Warning "`n>>> Erro ao gerar o build. Verifique se o projeto não tem erros e tente novamente."
}
