# Auto Git Push Watcher
# This script watches for changes and automatically pushes them every 2 minutes

Write-Host "👀 Starting Auto Git Push Watcher..." -ForegroundColor Cyan
Write-Host "⏱️  Will check for changes every 2 minutes" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop`n" -ForegroundColor Red

while ($true) {
    $timestamp = Get-Date -Format "HH:mm:ss"
    Write-Host "[$timestamp] Checking for changes..." -ForegroundColor Gray
    
    # Add all changes
    git add -A
    
    # Check if there are changes to commit
    $status = git status --porcelain
    if ($status) {
        $commitTime = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        
        Write-Host "[$timestamp] 💾 Found changes! Committing..." -ForegroundColor Yellow
        git commit -m "Auto-commit: Update files [$commitTime]"
        
        Write-Host "[$timestamp] ⬆️  Pushing to GitHub..." -ForegroundColor Yellow
        git push
        
        Write-Host "[$timestamp] ✅ Successfully pushed!" -ForegroundColor Green
    } else {
        Write-Host "[$timestamp] ℹ️  No changes detected." -ForegroundColor Blue
    }
    
    # Wait 2 minutes (120 seconds)
    Start-Sleep -Seconds 120
}
