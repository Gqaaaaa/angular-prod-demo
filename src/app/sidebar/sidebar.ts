// src/app/components/layout/layout.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="app-layout-container">
      <!-- SIDEBAR LATERAL -->
      <aside class="sidebar">
        <div class="sidebar-header">
          <h2>Panel Admin</h2>
          <p>Sistema de Ventas</p>
        </div>

        <nav class="sidebar-menu">
          <a routerLink="/productos" routerLinkActive="active" class="menu-item">
            📦 <span>Productos</span>
          </a>
          <a routerLink="/pedidos" routerLinkActive="active" class="menu-item">
            🛒 <span>Pedidos</span>
          </a>
        </nav>

        <div class="sidebar-footer">
          <button (click)="logout()" class="btn-logout">
            🚪 Cerrar Sesión
          </button>
        </div>
      </aside>

      <!-- CONTENIDO PRINCIPAL DINÁMICO -->
      <main class="main-content-area">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-layout-container {
      display: flex;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .sidebar {
      width: 260px;
      background: #0f172a;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 4px 0 10px rgba(0,0,0,0.05);
    }
    .sidebar-header {
      padding: 1.5rem;
      background: #1e293b;
      border-bottom: 1px solid #334155;
    }
    .sidebar-header h2 { margin: 0; font-size: 1.25rem; color: #f8fafc; }
    .sidebar-header p { margin: 0.25rem 0 0; font-size: 0.75rem; color: #94a3b8; }
    
    .sidebar-menu {
      padding: 1.5rem 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex: 1;
    }
    .menu-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1.5rem;
      color: #94a3b8;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.2s ease;
    }
    .menu-item:hover, .menu-item.active {
      background: #1e293b;
      color: #ffffff;
      border-left: 4px solid #6366f1;
    }
    
    .sidebar-footer {
      padding: 1.25rem;
      border-top: 1px solid #334155;
      background: #0f172a;
    }
    .btn-logout {
      width: 100%;
      background: rgba(239, 68, 68, 0.1);
      color: #ef4444;
      border: 1px solid rgba(239, 68, 68, 0.2);
      padding: 0.6rem;
      border-radius: 0.375rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn-logout:hover {
      background: #ef4444;
      color: white;
    }
    
    .main-content-area {
      flex: 1;
      background: #f8fafc;
      overflow-y: auto;
    }
  `]
})
export class LayoutComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}