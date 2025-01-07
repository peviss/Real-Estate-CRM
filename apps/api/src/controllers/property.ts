import { RequestHandler } from 'express';
import { propertyService } from '../services/property';

export class PropertyController {
  getAllProperties: RequestHandler = async (_req, res) => {
    try {
      const allProperties = await propertyService.getAllProperties();
      res.json(allProperties);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch properties' });
    }
  };

  getPropertyById: RequestHandler = async (_req, res) => {
    try {
      const { id } = _req.params;
      const property = await propertyService.getPropertyById(parseInt(id));
      res.json(property);
    } catch (error) {
      if (error instanceof Error && error.message === 'Property not found') {
        res.status(404).json({ error: 'Property not found' });
      } else {
        res.status(500).json({ error: 'Failed to fetch property' });
      }
    }
  };

  createProperty: RequestHandler = async (_req, res) => {
    try {
      const newProperty = await propertyService.createProperty(_req.body);
      res.status(201).json(newProperty);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create property' });
    }
  };

  updateProperty: RequestHandler = async (_req, res) => {
    try {
      const { id } = _req.params;
      const updatedProperty = await propertyService.updateProperty(parseInt(id), _req.body);
      res.json(updatedProperty);
    } catch (error) {
      if (error instanceof Error && error.message === 'Property not found') {
        res.status(404).json({ error: 'Property not found' });
      }
      res.status(500).json({ error: 'Failed to update property' });
    }
  };

  deleteProperty: RequestHandler = async (_req, res) => {
    try {
      const { id } = _req.params;
      await propertyService.deleteProperty(parseInt(id));
      res.json({ message: 'Property deleted successfully' });
    } catch (error) {
      if (error instanceof Error && error.message === 'Property not found') {
        res.status(404).json({ error: 'Property not found' });
      }
      res.status(500).json({ error: 'Failed to delete property' });
    }
  };
}

export const propertyController = new PropertyController();
