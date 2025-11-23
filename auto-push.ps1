# Auto Git Push Script
# This script automatically commits and pushes all changes to GitHub

Write-Host "🚀 Starting Auto Git Push..." -ForegroundColor Cyan

# Add all changes
Write-Host "📝 Adding all changes..." -ForegroundColor Yellow
git add -A

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    # Get current date and time
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    
    # Commit with timestamp
    Write-Host "💾 Committing changes..." -ForegroundColor Yellow
    git commit -m "Auto-commit: Update files [$timestamp]"
    
    # Push to GitHub
    Write-Host "⬆️  Pushing to GitHub..." -ForegroundColor Yellow
    git push
    
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
} else {
    Write-Host "ℹ️  No changes to commit." -ForegroundColor Blue
}

Write-Host "`n🎉 Done!" -ForegroundColor Cyan
