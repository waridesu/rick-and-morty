import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  Renderer2,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-rick-portal',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './rick-portal.component.html',
  styleUrls: ['./rick-portal.component.scss']
})
export class RickPortalComponent implements AfterViewInit, OnDestroy {
  @ViewChild('rendererContainer', {static: false}) rendererContainer: ElementRef | undefined;

  scene: THREE.Scene | undefined;
  sceneLight: THREE.DirectionalLight | undefined;
  portalLight: THREE.PointLight | undefined;
  cam: THREE.PerspectiveCamera | undefined;
  renderer: THREE.WebGLRenderer | undefined;
  clock: THREE.Clock | undefined;
  portalParticles: THREE.Mesh[] = [];
  smokeParticles: THREE.Mesh[] = [];

  constructor(private renderer2: Renderer2) {
  }

  ngAfterViewInit() {
    this.initScene();
  }

  initScene() {
    this.scene = new THREE.Scene();
    // play with the color of the scene light
    this.sceneLight = new THREE.DirectionalLight(0x7cbc6c, 0.5);
    this.sceneLight.position.set(0, 0, 1);
    this.scene.add(this.sceneLight);
    // play with the color of the portal light
    this.portalLight = new THREE.PointLight(0x1b6f20, 30, 600, 1.7);
    this.portalLight.position.set(0, 0, 250);
    this.scene.add(this.portalLight);

    // this.cam = new THREE.PerspectiveCamera(80,window.innerWidth/window.innerHeight,1,10000);
    this.cam = new THREE.PerspectiveCamera(80, 600 / 500, 1, 10000);
    this.cam.position.z = 1000;
    this.scene.add(this.cam);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0x000000, 0);
    // this.renderer.setSize(window.innerWidth , window.innerHeight);
    this.renderer.setSize(500, 500);

    if (this.rendererContainer) {
      this.renderer2.appendChild(this.rendererContainer.nativeElement, this.renderer.domElement);
    }

    this.particleSetup();
  }

  particleSetup() {
    let loader = new THREE.TextureLoader();

    loader.load("./assets/smoke.png", (texture) => {
      let portalGeo = new THREE.PlaneGeometry(350, 350);
      let portalMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true
      });
      let smokeGeo = new THREE.PlaneGeometry(1000, 1000);
      let smokeMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true
      });

      for (let p = 880; p > 250; p--) {
        let particle = new THREE.Mesh(portalGeo, portalMaterial);
        particle.position.set(
          0.5 * p * Math.cos((4 * p * Math.PI) / 180),
          0.5 * p * Math.sin((4 * p * Math.PI) / 180),
          0.1 * p
        );
        particle.rotation.z = Math.random() * 360;
        this.portalParticles.push(particle);
        this.scene?.add(particle);
      }

      for (let p = 0; p < 40; p++) {
        let particle = new THREE.Mesh(smokeGeo, smokeMaterial);
        particle.position.set(
          Math.random() * 1000 - 500,
          Math.random() * 400 - 200,
          25
        );
        particle.rotation.z = Math.random() * 360;
        particle.material.opacity = 0.6;
        this.portalParticles.push(particle);
        this.scene?.add(particle);
      }
      this.clock = new THREE.Clock();
      this.animate();
    });
  }

  animate() {
    let delta = this.clock?.getDelta() || 0;
    this.portalParticles.forEach(p => {
      p.rotation.z -= delta * 1.5;
    });
    this.smokeParticles.forEach(p => {
      p.rotation.z -= delta * 0.2;
    });
    if (Math.random() > 0.9 && this.portalLight) {
      this.portalLight.power = 350 + Math.random() * 500;
    }
    if (this.cam && this.renderer && this.scene) {
      this.renderer?.render(this.scene, this.cam);
    }
    requestAnimationFrame(() => this.animate());
  }

  ngOnDestroy() {
    if (this.rendererContainer) {
      this.renderer2.removeChild(this.rendererContainer.nativeElement, this.renderer?.domElement);
    }
    this.scene?.clear()
    this.sceneLight?.clear()
    this.portalLight?.clear()
    this.cam?.clear()
    this.renderer?.clear()
    this.clock?.stop()
    this.portalLight?.clear()
    this.smokeParticles = []
  }
}
