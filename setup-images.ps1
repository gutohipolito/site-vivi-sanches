# Script para copiar as imagens dos novos serviços para a pasta pública
$destDir = "c:\Projetos\Vivi Sanches\public\images\servicos"
if (!(Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
}

$images = @{
    "C:\Users\Gustavo\.gemini\antigravity\brain\b59b3cf4-479e-4fd0-bf3d-2f184a870ed5\liberacao_miofascial_1774462123075.png" = "liberacao-miofascial.png"
    "C:\Users\Gustavo\.gemini\antigravity\brain\b59b3cf4-479e-4fd0-bf3d-2f184a870ed5\diu_contracepcao_1774462137605.png" = "diu.png"
    "C:\Users\Gustavo\.gemini\antigravity\brain\b59b3cf4-479e-4fd0-bf3d-2f184a870ed5\depilacao_laser_1774462182478.png" = "depilacao-laser.png"
}

foreach ($src in $images.Keys) {
    $dest = Join-Path $destDir $images[$src]
    if (Test-Path $src) {
        Copy-Item $src $dest -Force
        Write-Host "Copiado: $dest"
    } else {
        Write-Warning "Arquivo não encontrado: $src"
    }
}
