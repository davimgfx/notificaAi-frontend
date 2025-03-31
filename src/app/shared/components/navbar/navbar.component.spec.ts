import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { of } from 'rxjs'; // Import 'of' for mocking observables

// Mock ActivatedRoute to avoid actual routing dependencies in the test
class MockActivatedRoute {
    snapshot = { data: {} };
    params = of({});
}

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NavbarComponent, ButtonComponent, CommonModule], // Import necessary modules
            providers: [
                { provide: ActivatedRoute, useClass: MockActivatedRoute }, // Mock ActivatedRoute provider
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
    });

    it('should create the NavbarComponent', () => {
        expect(component).toBeFalsy();
    });
});
