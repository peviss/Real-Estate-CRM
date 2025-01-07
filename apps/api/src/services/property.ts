import { db } from '../config/database';
import { properties } from '../db/schema';
import { eq } from 'drizzle-orm';
import { Property, CreatePropertyDto, UpdatePropertyDto } from '../models/property';

export class PropertyService {
  async getAllProperties(): Promise<Property[]> {
    try {
      return await db.select().from(properties);
    } catch (error) {
      throw new Error('Database error while fetching properties');
    }
  }

  async getPropertyById(id: number): Promise<Property> {
    try {
      const property = await db
        .select()
        .from(properties)
        .where(eq(properties.id, id))
        .limit(1);

      if (!property.length) {
        throw new Error('Property not found');
      }

      return property[0];
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Database error while fetching property');
    }
  }

  async createProperty(propertyData: CreatePropertyDto): Promise<Property> {
    try {
      const newProperty = await db
        .insert(properties)
        .values(propertyData)
        .returning();

      return newProperty[0];
    } catch (error) {
      throw new Error('Database error while creating property');
    }
  }

  async updateProperty(id: number, propertyData: UpdatePropertyDto): Promise<Property> {
    try {
      const updatedProperty = await db
        .update(properties)
        .set({
          ...propertyData,
          updatedAt: new Date()
        })
        .where(eq(properties.id, id))
        .returning();

      if (!updatedProperty.length) {
        throw new Error('Property not found');
      }

      return updatedProperty[0];
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Database error while updating property');
    }
  }

  async deleteProperty(id: number): Promise<Property> {
    try {
      const deletedProperty = await db
        .delete(properties)
        .where(eq(properties.id, id))
        .returning();

      if (!deletedProperty.length) {
        throw new Error('Property not found');
      }

      return deletedProperty[0];
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Database error while deleting property');
    }
  }
}

export const propertyService = new PropertyService(); 